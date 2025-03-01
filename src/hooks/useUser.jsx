import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../services/userServices";

const useUser = () => {
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        useEffect(() => {
            const fetchUsers = async () => {
              try {
                const data = await getUsers();
                setUsers(data);
              } catch (err) {
                setError(err.message);
              } finally {
                setLoading(false);
              }
            };
        
            fetchUsers();
          }, []);
        
          return { users, loading, error };
    };
    export default useUser;