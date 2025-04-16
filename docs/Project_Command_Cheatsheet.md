# 🧠 Project Command Cheatsheet

This file contains standardized commands to be used across all chats within the Schedule 1 Project. These ensure each module stays aligned with its purpose and hierarchy. Commands should be issued clearly within a chat to trigger a focused response, reinitialization, or reroute to another module.

---

## 🔁 GLOBAL MAINTENANCE COMMANDS

### `/reset_scope`
> Re-applies the original purpose, rank, and scope of this chat. Use if the conversation has drifted or merged topics.

### `/relink_master`
> Reestablishes connection with 🧠 A1 – Master Vision. This allows the chat to verify it's following the latest hierarchy and workflow definitions.

---

## 🛠️ MODULE-SPECIFIC BEHAVIOR

### `/explain_scope`
> Returns a human-readable summary of what this chat is responsible for. Great when you forgot what a chat does or when you're switching contexts.

### `/handoff_to [chat-name]`
> Explains what to send next to another module. If the current task is outside scope, the chat will redirect you with a description and next step.

---

## 🧪 TESTING & SANDBOX

### `/create_test_env_file`
> Prepares a new blank `test-index.html` or `test-main.js` in `/test-env/`. Use for safe prototyping.

### `/summon_sandbox`
> Triggers a conversation with 🔬 D1 – Debug & Feature Sandbox if you're testing new designs, broken features, or wild UI ideas.

---

## 🧾 FILE & DATA REQUESTS

### `/load_data_file [filename]`
> Loads the requested data file (e.g., `uid_enhanced_recipe_registry.json`) into memory for analysis.

### `/where_is [file or feature]`
> Tells you where in the folder structure a file lives or which chat is responsible for it.

---

## 🔗 SYNC & UPSTREAM REPORTING

### `/report_status`
> Generates a quick report to 🧠 A1 with what’s done, in progress, and blocked in this chat.

### `/need_input_from [chat-name]`
> Flags that this chat requires a specific output from another chat. Keeps everyone working in order.

---

## ✅ PRODUCTION CLEANUP

### `/ready_for_merge`
> Confirms a feature/test is stable and ready to merge into `index.html` or `main.js`.

---

## ⚠️ RULES

- Only use commands that start with `/`
- Each module must refuse to perform actions outside their scope and instead guide or redirect
- Master Vision retains override powers on any chat or module

---

Together we are perfect.