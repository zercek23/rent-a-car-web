import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { connect } from 'react-redux';
import { closeNavbar, closeFooter } from '../../../store/actions/viewActions';
import { LoginUser } from '../../../store/actions/authActions';
import { addUser, addToken, getUser, isAuthenticated } from '../../../helpers/userAuth';
import { Redirect } from "react-router-dom";
import TheLayout from '../../../containers/TheLayout';

const Login = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [userCheck, setUserCheck] = useState(isAuthenticated());

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.LoginUser(user);

  };

  useEffect(() => {
    props.closeNavbar();
    props.closeFooter();

  }, [])

  useEffect(() => {
    if (props.auth.user.token) {
      addToken(props.auth.user.token);
      addUser(user);
      setUserCheck(isAuthenticated());
    }
    
    
  }, [props.auth.user.token])

  if (!userCheck) {
    return (
      <>
        <div className="c-app c-default-layout flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="6">
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm onSubmit={onSubmit} >
                        <h1>Giriş Yap</h1>
                        <p className="text-muted">Üyeliğine Giriş Yap!</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="E-posta" autoComplete="username" name="email" onChange={onChange} />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="password" placeholder="Şifre" autoComplete="current-password" name="password" onChange={onChange} />
                        </CInputGroup>
                        <CRow>
                          <CCol xs="6">
                            <CButton type="submit" color="primary" className="px-4">Giriş</CButton>
                          </CCol>
                          <CCol xs="6" className="text-right">
                            <Link to="/register">
                              <CButton color="link" className="px-0">Üye Ol!</CButton>
                            </Link>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
  
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </>
  
    )
  } else {
    return (
      <Redirect to="/rent-a-car"/>
    )
  }
  
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  view: state.view
});

export default connect(mapStateToProps, { LoginUser, closeNavbar, closeFooter })(Login);