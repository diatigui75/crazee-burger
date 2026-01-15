import { Link, useParams } from "react-router-dom";

export default function OrderPage() {

    //State (state, données)
    const { username } = useParams()
    console.log("parametres:", username);


    //Behavior (comportements)


    //Render (affichage)

    return (
        <div>
            <h1>Bonjour {username} !</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
    )
}
