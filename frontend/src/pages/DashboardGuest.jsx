import Button from "../components/Button"
import axios from "axios"
import {useState, 
        useEffect,
        useMemo,
        useCallback} from "react"

const Dashboard = () => {
  
  const [rows, setRows] = useState([]);
  const [audio, setAudio] = useState([]);
  const [users, setUsers] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const fetchData = useCallback(async () => {
    try {
      const { data: userData } = await axios.get(
        "https://illya-site-backend-production.up.railway.app/api"
      );
      const { data: audioData } = await axios.get(
        "https://illya-site-backend-production.up.railway.app/audio"
      );

      setUsers(userData);
      setAudio(audioData);
    } catch (err) {
      console.error(err);
    }
  }, []);


  useEffect(() => {
    fetchData();
  },[fetchData]);


  useMemo(() => {
    const songList = audio.slice(startIndex, endIndex);
    const listOfUsers = users;
    if(listOfUsers.length){
    const userMap = new Map();
    const result = [];
    
    for (const user of listOfUsers) {
      userMap.set(user._id, user);
    }
  
    for (const song of songList) {
      const user = userMap.get(song.user);
      if (user) {
        result.push(
          <tr key={song._id}>
            <td>{song.name}</td>
            <td>
              <button
                className="button small"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("song", song._id);
                  window.location.reload();
                }}
              >
                Play
              </button>
            </td>
            <td></td>
            <td></td>
            <td>{user.userName}</td>
          </tr>
        );
      }
    }
  
    setRows(result);
  }
  }, [audio, endIndex, startIndex, users]);
  


const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
}

  return (
    <section id = "dashboard">

      <section className="pagination">
        {Array.from({ length: Math.ceil(audio.length / rowsPerPage) }, (_, i) => (
            <Button 
            key={i} 
            onClick={() => {
              handlePageChange(i + 1)
            }}
            text = {i + 1}
            cname = "button"
            />
))}
      </section>

        <div id = "tableContainer">

          <table>
            <thead>
              <tr>
                <th>Song Name</th>
                <th>Delete</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>

         
        </div>

    </section>
  )
}

export default Dashboard