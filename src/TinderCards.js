import React, {useState , useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import database from "./firebase.js";

function TinderCards() {
    const [people, setPeople] = useState([
        // {
        //     name: "Elon mask",
        //     url:  "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        // },
        // {
        //     name: "jesss",
        //     url:  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",
        // },
        // {
        //     name: "jesss",
        //     url:  "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        // },
    ]);

    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        //this will run once when component loads and never again []
    }, [])

    const swiped = (direction, nameToDelete) =>{
        console.log("removing :" + nameToDelete);
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe" key="{person.name}" preventSwipe={["up","down"]}
                    onswipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={()=> outOfFrame(person.name)}>
                        <div style={{backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
