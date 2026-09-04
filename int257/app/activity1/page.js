// activity: fetch user's data json using fetch api and client side rendering in next js, and display the data.
export default function User({params}){
    const {id}=params;
    const [userData, setUserData] = React.useState(null);

    React.useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [id]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User ID: {id}</h1>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Website: {userData.website}</p>
        </div>  
     )
    }
