import axios from "axios";

export default async function fetchTimetableLog(date: string, length: number = 10): Promise<ViewerApiResult[]> {
  const res = await axios.get<ViewerApiResult[]>("https://script.google.com/macros/s/AKfycbwgDhYxTF4LJ_JnbhI49IZ0EgzsdnhvmlFKIZgKgocl1esHGnYmY8a4AxMd7l-dEY9-mw/exec", {
    params: { length, type: "date", date },
  });

  return res.data;
}
