import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//MUI IMPORTS ///
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function RoomDetail() {
  // ROOM FETCH
  let params = useParams();
  let roomId = params.id;

  const [roomDetail, setRoomDetail] = useState({});

  const getRoom = () => {
    fetch(`http://localhost:5000/rooms/${roomId}`)
      .then((response) => {
        console.log("API CONNECTED");
        return response.json();
      })
      .then((result) => {
        setRoomDetail(result[0]);
        console.log("SET API UPDATE");
        console.log(result);
      });
  };

  useEffect(() => {
    getRoom();
  }, []);

  useEffect(() => {}, [roomDetail]);

  // WEEK TAB FETCH
  const [slots, setSlots] = useState([]);

  const getSlots = () => {
    fetch(`http://localhost:5000/slots/`)
      .then((response) => {
        console.log("API SLOTS CONNECTED");
        return response.json();
      })
      .then((result) => {
        setSlots(result);
        console.log("SET API SLOTS UPDATE");
        console.log(`${result} SLOTS RESULTS`);
      });
  };

  useEffect(() => {
    getSlots();
  }, []);

  // BINARY SLOT SAVE
  const [binarySlot, setBinarySlot] = useState();

  const binaryTest = (elt) => {
    elt.preventDefault();
    setBinarySlot(elt);
    console.log(binarySlot);
  };

  return (
    <div className="RoomDetail">
      <Card >
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={roomDetail.photo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {roomDetail.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {roomDetail.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {roomDetail.price} $
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Capacity: {roomDetail.capacity} personnes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age Limit: {roomDetail.ageMin} ans
          </Typography>
        </CardContent>
        <CardActions>
          <Stack spacing={2} direction="row"></Stack>
        </CardActions>
      </Card>
      <div className="allSlotsDisplay">
        {slots.map((daySlot) => {
          return daySlot.week.map((dayTime) => {
            return dayTime.map((elt) => {
              return (
                <div>
                  <div className="slotDisplay">
                    {elt == "01" && elt !== "10" && elt !== "11" ? (
                      <Link
                        to={{
                          pathname: `/reservation/${roomDetail._id}/${elt}`,
                        }}
                      >
                        <Button variant="contained"> Matin </Button>
                        {/* // TODO: BUTTON WITH ONCLICK SLOT SET STATUS  */}
                        {/* <Button variant="contained" onClick={binaryTest(elt)}> Matin </Button> */}
                      </Link>
                    ) : (
                      <Button disabled={true} variant="outlined">
                        Matin
                      </Button>
                    )}
                  </div>
                  <div className="slotDisplay">
                    {elt == "11" && elt !== "00" && elt !== "01" ? (
                      <Link
                        to={{
                          pathname: `/reservation/${roomDetail._id}/${elt}`,
                        }}
                      >
                        <Button variant="contained"> Soir </Button>
                        {/* // TODO: BUTTON WITH ONCLICK SLOT SET STATUS  */}
                        {/* <Button variant="contained" onClick={binaryTest(elt)} > Soir </Button> */}
                      </Link>
                    ) : (
                      <Button disabled={true} variant="outlined">
                        Soir
                      </Button>
                    )}
                  </div>
                </div>
              );
            });
          });
        })}
      </div>
    <Link
            to={{
              pathname: `/`,
            }}
          >
            <Button className="buttonBack" size="small"> Retour</Button>
          </Link>
    </div>
  );
}

/* <div className="allSlotsDisplay">
        {slots.map((daySlot) => {
          return daySlot.week.map((dayTime) => {
            return dayTime.map((elt) => {
              console.log("daytame " + elt);
              return (
                <div className="slotDisplay">
                  {elt == true ? (
                    <Link to={{ pathname: `/reservation/${roomDetail._id}` }}>
                      <Button variant="contained"> Matin </Button>
                    </Link>
                  ) : (
                    <Button disabled={true} variant="outlined">
                      {" "}
                      {elt}{" "}
                    </Button>
                  )}
                </div>
              );
            });
          });
        })}
      </div> */
