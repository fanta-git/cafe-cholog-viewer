import axios from "axios";

export default async function fetchTimetableLog(date: string): Promise<ViewerApiResult[]> {
  const res = await axios.get<ViewerApiResult[]>("https://script.google.com/macros/s/AKfycbwgDhYxTF4LJ_JnbhI49IZ0EgzsdnhvmlFKIZgKgocl1esHGnYmY8a4AxMd7l-dEY9-mw/exec", {
    params: {
      limit: 10,
      type: "date",
      date
    },
  });

  return res.data;
}
