import React from 'react';
import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import ProfileTabs from "../../components/TeaRoomProfile/Tab";
import { Link } from "react-router-dom";
import { NavbarForum } from "../../../components/NavbarForum/index";


export function TeaRoomProfile() {
  const [user, setUser] = useState({});


  //TODO: como colocar um toaste para aparecer alguma mensagem de perfil alterado antes de voltar para o perfil. Só voltar pro perfil quando clicar em ok
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get("/user/profile");
        setUser(response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <>
      <NavbarForum />
      <div className="gradient-custom-2" style={{ backgroundColor: "  #F5F5F5 " }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7" sm="6" style={{ width: "80vw" }}>
              <MDBCard >
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#BBDEFB', height: '300px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <MDBCardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy2vRwSRoUACatub962auO36Uo5OjNQ5wCQ&usqp=CAU"
                      alt="Generic placeholder image" className="mt-4 mb-2 mr-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                    <Link to="/tea-room/profile/edit">
                      <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible', backgroundColor: '#BBDEFB' }}>
                        Edit profile
                      </MDBBtn>
                    </Link>
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <MDBTypography tag="h5">{user.username}</MDBTypography>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                      <MDBCardText className="font-italic mb-1">{user.about}</MDBCardText>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <ProfileTabs />
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
