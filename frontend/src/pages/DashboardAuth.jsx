import {useState, 
        useEffect,
        useMemo,
        useCallback} from "react"
import axios from "axios"
import Post from "../components/Post"
import Button from "../components/Button"

const Dashboard = () => {
  
  const [audio, setAudio] = useState([]);
  const [rows, setRows] = useState([]);
  const [users, setUsers] = useState([]);
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


  useEffect(()=>{
    fetchData();
  },[fetchData]);

  useMemo(()=>{

    //Lists all songs posted by users
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
          result.push(<Post 
                          key={song._id} 
                          id={song._id} 
                          text={song.name} 
                          userName={user.userName} 
                          userID={user._id} 
                        />);
        }
    }

      setRows(result);

    }
  },[audio, 
    endIndex,
    startIndex,
    users])

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
                  <th></th>
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