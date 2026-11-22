// Install dependencies
// npm install @octokit/rest

const { Octokit } = require("@octokit/rest");

// Replace with your GitHub token and repo details
const octokit = new Octokit({
  auth: "YOUR_PERSONAL_ACCESS_TOKEN"
});

const OWNER = "your-username";
const REPO = "your-repo";
const FILE_PATH = "README.md";
const BRANCH = "main";

// Example: Read a file
async function readFile() {
  const file = await octokit.rest.repos.getContent({
    owner: OWNER,
    repo: REPO,
    path: FILE_PATH,
    branch: BRANCH
  });
  console.log("File content (base64):", file.data.content); // decode as needed
  console.log("SHA:", file.data.sha);
}

// Example: Update a file
async function updateFile() {
  const newContent = Buffer.from("Updated README content", "utf8").toString("base64");
  const file = await octokit.rest.repos.getContent({
    owner: OWNER,
    repo: REPO,
    path: FILE_PATH,
    branch: BRANCH
  });
  const { sha } = file.data;

  await octokit.rest.repos.createOrUpdateFileContents({
    owner,
    repo: REPO,
    path: FILE_PATH,
    sha,
    content: newContent,
    message: "Update README.md",
    committer: { name: "Bot", email: "bot@example.com" },
    author: { name: "Bot", email: "bot@example.com" }
  });
  console.log("File updated successfully");
}

// Run examples
readFile()
  .then(() => updateFile())
  .catch(err => console.error("Error:", err));
