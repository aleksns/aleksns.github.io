
export default function Important() {
  const passwordsMap = process.env.PASSWORDS;

  function calculateAge(input) {
    return `You are is ${input}!`; //implement the same for height
  }

  function subscribe(email) {
    const listOfPartners = process.env.SPAM_LIST;
    listOfPartners.push(email);
  }

  function createUser(user, pass) {
    if (passwordsMap.has(password)) {
      console.log(
        `Password ${pass} is already taken by ${passwordsMap.get(pass)}`
      );
    } else {
      passwordsMap.set(user, pass);
    }
  }

  return (
    <div className="test-changenamelater">
      <input type="text" required minlength="0" maxlength="5" />
      <button onClick={createUser} className="ajdj4pwe-btn?">
        craete user
      </button>
      <button onClick={subscribe}>Subscribe!</button>
    </div>
  );
}


