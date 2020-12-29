import { React, Component } from "react";
import iron from "../images/Emblem_Iron.png";
import bronze from "../images/Emblem_Bronze.png";
import silver from "../images/Emblem_Silver.png";
import gold from "../images/Emblem_Gold.png";
import platinum from "../images/Emblem_Platinum.png";
import diamond from "../images/Emblem_Diamond.png";
import master from "../images/Emblem_Master.png";
import grandmaster from "../images/Emblem_Grandmaster.png";
import challenger from "../images/Emblem_Challenger.png";
class Summoner extends Component {
  render() {
    let flexwinloss = "";
    let solowinloss = "";
    if (this.props.rank.length > 0) {
      flexwinloss = Math.floor(
        (this.props.rank[1].wins /
          (this.props.rank[1].wins + this.props.rank[1].losses)) *
          100
      );
      solowinloss = Math.floor(
        (this.props.rank[0].wins /
          (this.props.rank[0].wins + this.props.rank[0].losses)) *
          100
      );
    } else {
      solowinloss = null;
      flexwinloss = null;
    }

    if (this.props.found) {
      return (
        <div style={{ paddingTop: "2%" }} className="list-group">
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100">
              <div className="d-flex">
                <img
                  height={"100px"}
                  src={
                    "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/profileicon/" +
                    this.props.icon +
                    ".png"
                  }
                  alt={"Profile Icon: " + this.props.icon}
                />
                <div style={{ paddingLeft: "5%" }}>
                  <h1 className="mb-1 ">{this.props.name}</h1>
                  <h2>Level: {this.props.level}</h2>
                </div>
              </div>

              <div style={{ paddingLeft: "10%" }}>
                {this.props.rank.length > 0 ? (
                  <div>
                    <h4 className="mb-0">
                      Solo/Duo: {this.props.rank[0].tier + " "}
                      {this.props.rank[0].rank + " "}
                      {this.props.rank[0].tier === "IRON" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={iron}
                          alt="Iron Icon"
                        ></img>
                      )}
                      {this.props.rank[0].tier === "BRONZE" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={bronze}
                          alt="Bronze Icon"
                        ></img>
                      )}
                      {this.props.rank[0].tier === "SILVER" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={silver}
                          alt="Silver Icon"
                        ></img>
                      )}
                      {this.props.rank[0].tier === "GOLD" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={gold}
                          alt="Gold Icon"
                        ></img>
                      )}
                      {this.props.rank[0].tier === "PLATINUM" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={platinum}
                          alt="Platinum Icon"
                        ></img>
                      )}
                      {this.props.rank[0].tier === "DIAMOND" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={diamond}
                          alt="Diamond Icon"
                        ></img>
                      )}
                      {this.props.rank[0].tier === "MASTER" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={master}
                          alt="Master Icon"
                        ></img>
                      )}
                      {this.props.rank[0].tier === "GRANDMASTER" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={grandmaster}
                          alt="Grandmaster Icon"
                        ></img>
                      )}
                      {this.props.rank[0].tier === "CHALLENGER" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={challenger}
                          alt="Challenger Icon"
                        ></img>
                      )}
                    </h4>
                    <p>
                      Total Matches:{" "}
                      {this.props.rank[0].wins + this.props.rank[0].losses}
                    </p>
                    <p>
                      W/L- {solowinloss}% ({this.props.rank[0].wins} W /
                      {" " + this.props.rank[0].losses} L)
                    </p>
                    <h4 className="mb-0">
                      Flex: {this.props.rank[1].tier + " "}
                      {this.props.rank[1].rank + " "}
                      {this.props.rank[1].tier === "IRON" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={iron}
                          alt="Iron Icon"
                        ></img>
                      )}
                      {this.props.rank[1].tier === "BRONZE" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={bronze}
                          alt="Bronze Icon"
                        ></img>
                      )}
                      {this.props.rank[1].tier === "SILVER" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={silver}
                          alt="Silver Icon"
                        ></img>
                      )}
                      {this.props.rank[1].tier === "GOLD" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={gold}
                          alt="Gold Icon"
                        ></img>
                      )}
                      {this.props.rank[1].tier === "PLATINUM" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={platinum}
                          alt="Platinum Icon"
                        ></img>
                      )}
                      {this.props.rank[1].tier === "DIAMOND" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={diamond}
                          alt="Diamond Icon"
                        ></img>
                      )}
                      {this.props.rank[1].tier === "MASTER" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={master}
                          alt="Master Icon"
                        ></img>
                      )}
                      {this.props.rank[1].tier === "GRANDMASTER" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={grandmaster}
                          alt="Grandmaster Icon"
                        ></img>
                      )}
                      {this.props.rank[1].tier === "CHALLENGER" && (
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={challenger}
                          alt="Challenger Icon"
                        ></img>
                      )}
                    </h4>
                    <p>
                      Total Matches:{" "}
                      {this.props.rank[1].wins + this.props.rank[1].losses}
                    </p>
                    <p>
                      W/L- {flexwinloss}% ({this.props.rank[1].wins} W /
                      {" " + this.props.rank[1].losses} L)
                    </p>
                  </div>
                ) : (
                  <h1>{this.props.rank.length === 0}</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <p></p>;
    }
  }
}
export default Summoner;
