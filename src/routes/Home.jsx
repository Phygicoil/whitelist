export default function Home() {
  const auth = useUpProvider();
  const { universalProfile } = auth;
  const [followers, setFollowers] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchFollowers();
  }, []);

  async function fetchFollowers() {
    // Logic clearly to fetch current whitelist UPs
  }

  async function joinWhitelist() {
    // Logic clearly to add current UP to whitelist
  }

  async function handleEmailSubmit(e) {
    e.preventDefault();
    console.log("Email captured:", email);
    // Add logic to send the email to backend or API
    setEmail('');
  }

  return (
    <div className="flex flex-col items-center p-4 bg-white">
      <img
        src="https://pbs.twimg.com/media/GjtzVB4aIAAYzpi?format=jpg&name=large"
        alt="Product"
        className="max-w-full h-auto"
      />

      <button 
        onClick={joinWhitelist} 
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
      >
        Join Whitelist
      </button>

      <div className="mt-4 w-full">
        <h3 className="font-semibold mb-2">Whitelist Members:</h3>
        {followers.map((follower, idx) => (
          <p key={idx}>{follower}</p>
        ))}
      </div>

      <form onSubmit={handleEmailSubmit} className="mt-6 flex flex-col items-center w-full">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-sm"
        />
        <button 
          type="submit"
          className="mt-3 px-6 py-2 bg-green-500 text-white rounded"
        >
          Submit Email
        </button>
      </form>
    </div>
  );
}