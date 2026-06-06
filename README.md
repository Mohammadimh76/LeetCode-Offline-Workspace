<div align="center">

# 🚀 LeetVault: LeetCode Offline Workspace

**Your ultimate distraction-free environment to master algorithms.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Python Server](https://img.shields.io/badge/Python-3.x-FFE873.svg?style=for-the-badge&logo=python)](https://www.python.org/)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

[Features](#-key-features) • [Demo](#-sneak-peek--demo) • [Getting Started](#-getting-started) • [Data Schema](#-data-schema) • [Contributing](#-contributing)

</div>

---

## 💡 About The Project

**LeetVault** (or LeetCode Offline) is a lightweight, fully functional local web application designed to help developers browse, study, and practice algorithmic problems without the need for an active internet connection. 

Whether you are studying on a flight, commuting, or simply want a distraction-free zone to focus on optimizing your $O(n \log n)$ algorithms, this workspace provides everything you need directly on your localhost.

---

## ✨ Key Features

- 📴 **100% Offline Access:** No internet? No problem. All data is served locally.
- 📖 **Comprehensive Problem Details:** View Problem ID, Difficulty, and categorized Topics at a glance.
- 🧠 **Rich Content Rendering:** Beautifully formatted problem descriptions, examples, and hints.
- 💻 **Multi-Language Boilerplates:** Jump straight into coding with ready-to-use starter code templates for languages like Python, C++, Java, and JS.
- ⚡ **Zero Dependencies Setup:** Runs purely on Vanilla HTML/CSS/JS and a built-in Python HTTP server. No `npm install` required!

---

## 🎥 Sneak Peek / Demo

*Experience the seamless, fast, and responsive UI.*

<div align="center">
  <!-- GitHub supports rendering video tags directly -->
  <video src="https://github.com/user-attachments/assets/YOUR-VIDEO-LINK-HERE.mp4" width="700" controls muted autoplay loop>
    Your browser does not support the video tag.
  </video>
  <br/>
  <i>Replace the `src` attribute with your actual video or GIF link.</i>
</div>

---

## 📂 Architecture & Structure

A clean, modular structure ensures easy maintenance and expansion:
```text
📦 LeetCode-Offline
 ┣ 📂 Data
 ┃ ┗ 📂 problems         👉 Directory containing JSON problem files
 ┣ 📂 Js
 ┃ ┗ 📜 config.js        👉 Global configuration and state management
 ┣ 📜 app.js             👉 Core logic and DOM manipulation
 ┣ 📜 index.html         👉 Main UI layout
 ┣ 📜 style.css          👉 Modern UI styling (Flexbox/Grid)
 ┗ 📜 guidelines.txt     👉 Quick CLI setup commands
```
---

## 🚀 Getting Started

Getting this project up and running is incredibly simple. 

### Prerequisites
All you need is **Python 3.x** installed on your machine to spin up the local server.

### Installation & Execution

**Step 1:** Clone the repository to your local machine:
bash
git clone https://github.com/YourUsername/LeetCode-Offline.git
cd LeetCode-Offline

**Step 2:** Start the local Python HTTP server. Run this command in the root directory:
bash
`python -m http.server 8000`

**Step 3:** Open your favorite web browser and navigate to:
text
`http://localhost:8000`

🎉 **You are all set! Happy coding.**

---

## 🗄️ Data Schema

Adding new problems is as easy as creating a new JSON file in the `Data/problems/` directory. Here is the blueprint of how the data is structured:
```json
json
{
  "id": 1,
  "title": "Two Sum",
  "difficulty": "Easy",
  "topics": ["Array", "Hash Table"],
  "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  "examples": [
{
"input": "nums = [2,7,11,15], target = 9",
"output": "[0,1]",
"explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
}
  ],
  "hints": [
"A really brute force way would be to search for all possible pairs...",
"Can you use a hash map to achieve $O(n)$ time complexity?"
  ],
  "code_templates": {
"python": "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        pass",
"cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};"
  }
}
```
---

## 🤝 Contributing

We welcome contributions from the community! Whether it's adding new problem JSON files, tweaking the CSS for a better Dark Mode, or optimizing the JS logic:

1. **Fork** the repository.
2. **Create a new branch:** `git checkout -b feature/AmazingFeature`
3. **Commit your changes:** `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch:** `git push origin feature/AmazingFeature`
5. **Open a Pull Request.**

---

## 📜 License

Distributed under the **[MIT License](LICENSE)**. See the `LICENSE` file for more information.

<div align="center">
  <i>Built with ❤️ for algorithmic enthusiasts.</i>
</div>
