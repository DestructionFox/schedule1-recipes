
# 📌 Project Commands Guide

This guide documents all standard project commands you can use across Schedule 1 project chats to enhance communication, streamline workflows, and manage tasks effectively.

## 🔹 General Commands

- `/get_updates`: 
  - Pulls the latest updates from all relevant chats or specifically from 🧠 Master Vision (A1).
  - Use regularly to keep chats aligned and synchronized.

- `/force_sync`: 
  - Forces a complete sync of the current chat with the latest project structure and decisions.
  - Ideal after significant project changes or major task completions.

- `/commands`: 
  - Displays a complete list of available commands and their descriptions.
  - Useful for quick reference to project commands.

## 🔹 Scope Management Commands

- `/reset_scope`: 
  - Clears and resets the current chat's memory and context to its defined original scope and instructions.
  - Ensures chats remain focused on their assigned tasks.

- `/expand_scope [details]`: 
  - Temporarily expands the chat’s scope to handle specific additional tasks or scenarios, clearly documented by the details provided.
  - Requires explicit permission from 🧠 Master Vision (A1).

- `/limit_scope [details]`: 
  - Temporarily limits the chat's scope to a narrower, clearly defined task subset.
  - Helpful for troubleshooting or deep-dive tasks.

## 🔹 Status & Reporting Commands

- `/report_status`: 
  - Generates a brief report summarizing recent work, current issues, and immediate next steps.
  - Should be used at milestone completions or regular intervals.

- `/request_feedback`: 
  - Requests feedback from the Master Vision (A1) or relevant chats regarding current tasks or outputs.
  - Essential for ensuring quality and alignment with project goals.

## 🔹 Task Management Commands

- `/log_task [task description]`: 
  - Officially logs a new task within the chat’s active task list.
  - Clearly describe tasks to track responsibilities and progress.

- `/complete_task [task ID or description]`: 
  - Marks a specific task as complete, removes it from active tasks, and logs completion details.
  - Enhances clarity of task completion and status.

- `/pending_tasks`: 
  - Lists all currently open and pending tasks within the chat.
  - Useful for task audits and regular check-ins.

## 🔹 Testing & Deployment Commands

- `/deploy_test`: 
  - Initiates deployment of the current development version into the designated test environment (`test-env`).
  - Ensures safety and stability before live deployment.

- `/confirm_test`: 
  - Confirms a successful test deployment, authorizing transition from testing to production-ready status.
  - Required before any live deployment.

- `/deploy_live`: 
  - Deploys the fully tested and confirmed version to the live production environment.
  - Use cautiously, only after explicit confirmation and approval from 🧠 Master Vision (A1).

## 🔹 Documentation Commands

- `/update_docs [details]`: 
  - Instructs the chat to update relevant documentation based on the latest task completions or decisions.
  - Clearly specify details for accuracy.

- `/fetch_docs`: 
  - Retrieves the most current version of project documentation for reference or updates.
  - Ensures documentation remains synchronized across all project chats.

---

📝 **Always refer to this guide to enhance productivity, maintain clear communication, and ensure alignment across the entire Schedule 1 project ecosystem.**


---

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