import { database, ID } from "./config";

export async function createTask({
  task,
  details,
  isCompleted,
}: {
  task: string;
  details: string;
  isCompleted: boolean;
}) {
  try {
    await database.createDocument(
      process.env.NEXT_PUBLIC_TODO_DATABASE,
      process.env.NEXT_PUBLIC_TASK_COLLECTION,
      ID.unique(),
      { task, details, isCompleted },
    );
  } catch (err) {
    throw new Error(`Error creating task, ${err}`);
  }
}

export async function viewTasks() {
  try {
    const response = await database.listDocuments(
      process.env.NEXT_PUBLIC_TODO_DATABASE,
      process.env.NEXT_PUBLIC_TASK_COLLECTION,
    );
    return response;
  } catch (err) {
    throw new Error(`Error viewing tasks, ${err}`);
  }
}
