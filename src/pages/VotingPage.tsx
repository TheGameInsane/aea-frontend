import { useState, useEffect } from "react";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAuth, type User } from "../utils/AuthContext"; // Preserved your import path

// --- 1. Define your backend API URL ---
const VOTE_API_URL = "http://localhost:5000/api"; // Preserved your port

// --- 2. Mock T-Shirt Design Data ---
const designs = [
  {
    id: "design-a-retro-sun",
    name: "Retro Sun",
    imageUrl:
      "https://via.placeholder.com/300x300/FFD700/000000?text=Retro+Sun",
  },
  {
    id: "design-b-tech-lines",
    name: "Tech Lines",
    imageUrl:
      "https://via.placeholder.com/300x300/0000FF/FFFFFF?text=Tech+Lines",
  },
  {
    id: "design-c-minimalist-logo",
    name: "Minimalist Logo",
    imageUrl:
      "https://via.placeholder.com/300x300/FFFFFF/333333?text=Minimalist",
  },
];

// --- 3. Define the shape of the vote results ---
interface VoteResult {
  designId: string;
  voteCount: number;
}

const VotingPage = () => {
  const { user, setUser } = useAuth();

  // --- 4. Add new state for voting logic ---
  const [isVoting, setIsVoting] = useState(false);
  const [voteError, setVoteError] = useState<string | null>(null);
  const [voteSuccess, setVoteSuccess] = useState<string | null>(null);
  const [results, setResults] = useState<VoteResult[]>([]);

  // --- NEW: State to manage the confirmation modal ---
  const [pendingVote, setPendingVote] = useState<string | null>(null);

  // --- NEW: Helper to find the design object for the modal ---
  const designToConfirm = pendingVote
    ? designs.find((d) => d.id === pendingVote)
    : null;

  // --- 5. Function to fetch vote results ---
  const fetchResults = async () => {
    try {
      const response = await fetch(`${VOTE_API_URL}/results`);
      if (response.ok) {
        const data: VoteResult[] = await response.json();
        setResults(data);
      }
    } catch (err) {
      console.error("Failed to fetch results:", err);
    }
  };

  // --- 6. Fetch results when component loads (or user logs in) ---
  useEffect(() => {
    if (user) {
      fetchResults();
    }
  }, [user]); // Re-run when 'user' changes

  // ... (handleLoginSuccess, handleLoginError, handleLogout are unchanged) ...
  // Handle successful login
  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const userObject = jwtDecode<User>(credentialResponse.credential!);
    setUser(userObject);
  };

  // Handle login failure
  const handleLoginError = () => {
    console.log("Login Failed");
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setVoteError(null);
    setVoteSuccess(null);
    setResults([]);
  };

  // --- 7. The function that calls your backend API ---
  const handleVoteSubmit = async (designId: string) => {
    if (!user) {
      setVoteError("You must be logged in to vote.");
      return;
    }

    setIsVoting(true);
    setVoteError(null);
    setVoteSuccess(null);

    try {
      const response = await fetch(`${VOTE_API_URL}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.sub, // The unique Google ID
          designId: designId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setVoteSuccess(`Vote cast for ${designId}!`);
        await fetchResults(); // Refresh the vote counts
      } else if (response.status === 409) {
        setVoteError(data.message || "You have already voted.");
      } else {
        setVoteError(data.message || "An error occurred.");
      }
    } catch (err) {
      console.error("Failed to submit vote:", err);
      setVoteError("Could not connect to the voting server.");
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      {!user ? (
        // --- STATE 1: User is NOT logged in ---
        <div>
          {/* ... (This section is unchanged) ... */}
          <h2 className="text-3xl font-light mb-8">Login to Vote</h2>
          <p className="text-gray-400 mb-10">
            Please log in with your Google account to cast your vote.
          </p>
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
              useOneTap
            />
          </div>
        </div>
      ) : (
        // --- STATE 2: User IS logged in ---
        <div>
          <div className="flex justify-between items-center mb-12">
            {/* ... (This section is unchanged) ... */}
            <div className="text-left">
              <h2 className="text-3xl font-light">Welcome, {user.name}!</h2>
              <p className="text-gray-400">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-red-600 transition-all text-sm"
            >
              Logout
            </button>
          </div>

          {/* --- Voting Section --- */}
          <h3 className="text-4xl font-extralight tracking-wider mb-10">
            Cast Your Vote
          </h3>

          {/* --- CHANGED: This is now a vertical flex column --- */}
          <div className="flex flex-col items-center gap-12">
            {designs.map((design) => (
              <div
                key={design.id}
                // --- CHANGED: Added max-width for better vertical layout ---
                className="bg-gray-800 rounded-lg shadow-xl p-6 w-full md:max-w-xl"
              >
                <img
                  src={design.imageUrl}
                  alt={design.name}
                  className="w-full h-64 object-cover rounded-md mb-6"
                />
                <h4 className="text-2xl font-light mb-6">{design.name}</h4>
                <button
                  // --- CHANGED: This now opens the modal, not submits ---
                  onClick={() => setPendingVote(design.id)}
                  disabled={isVoting || !!voteSuccess || !!voteError}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium tracking-wide
                             hover:bg-blue-700 transition-all
                             disabled:bg-gray-600 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {/* Text remains the same, but behavior is different */}
                  Vote for this Design
                </button>
              </div>
            ))}
          </div>

          {/* --- Status Messages --- */}
          <div className="mt-8 text-xl">
            {voteSuccess && <p className="text-green-400">{voteSuccess}</p>}
            {voteError && <p className="text-red-400">{voteError}</p>}
          </div>

          {/* --- Results Section --- */}
          {(voteSuccess || voteError) && (
            <div className="mt-16 text-left bg-gray-800 p-8 rounded-lg">
              {/* ... (This section is unchanged) ... */}
              <h3 className="text-3xl font-light mb-6">Current Results</h3>
              {results.length > 0 ? (
                <ul className="space-y-4">
                  {results.map((result) => (
                    <li
                      key={result.designId}
                      className="flex justify-between items-center text-lg"
                    >
                      <span className="text-gray-300">
                        {designs.find((d) => d.id === result.designId)?.name ||
                          result.designId}
                      </span>
                      <span className="font-bold text-xl">
                        {result.voteCount} Vote(s)
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No votes cast yet.</p>
              )}
            </div>
          )}

          {/* --- NEW: Confirmation Modal --- */}
          {designToConfirm && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg shadow-2xl text-center max-w-sm w-full">
                <h3 className="text-2xl font-light mb-4">Confirm Your Vote</h3>
                <p className="text-lg text-gray-300 mb-8">
                  Are you sure you want to vote for{" "}
                  <strong className="font-medium text-white">
                    {designToConfirm.name}
                  </strong>
                  ?
                </p>
                <div className="flex justify-around gap-4">
                  <button
                    onClick={() => setPendingVote(null)} // Close modal
                    disabled={isVoting} // Disable if a vote is in progress
                    className="w-full bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-all disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleVoteSubmit(designToConfirm.id); // Call submit
                      setPendingVote(null); // Close modal
                    }}
                    disabled={isVoting} // Disable while submitting
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50"
                  >
                    {isVoting ? "Submitting..." : "Confirm Vote"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VotingPage;
