import React, { useState, useEffect } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { connect } from 'react-redux';
import { addUser, addToken, getUser } from '../../../helpers/userAuth';
import { RegisterUser } from '../../../store/actions/authActions';
import { Redirect } from "react-router-dom";
import TheLayout from '../../../containers/TheLayout';

const Register = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [userCheck, setUserCheck] = useState('');

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        props.RegisterUser(user);
    };

    useEffect(() => {
      setUserCheck(getUser());
    }, [])
  
    useEffect(() => {
      if (props.auth.user.token) {
        addUser(user);
        addToken(props.auth.user.token);
        delete props.auth.user.token;
      }
      setUserCheck(getUser());
    }, [props.auth.user.token])


    return (
        <>
            {userCheck ?
                <Redirect to={TheLayout} /> :
                <div className="c-app c-default-layout flex-row align-items-center">
                    <CContainer>
                        <CRow className="justify-content-center">
                            <CCol md="9" lg="7" xl="6">
                                <CCard className="mx-4">
                                    <CCardBody className="p-4">
                                        <CForm onSubmit={onSubmit}>
                                            <h1>Üye Ol</h1>
                                            <p className="text-muted">Hesabını Yarat</p>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-user" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput type="text" placeholder="Ad" autoComplete="firstName" name="firstName" onChange={onChange} />
                                            </CInputGroup>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>@</CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput type="text" placeholder="Soyad" autoComplete="lastName" name="lastName" onChange={onChange} />
                                            </CInputGroup>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-lock-locked" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput type="text" placeholder="E-posta" autoComplete="email" name="email" onChange={onChange} />
                                            </CInputGroup>
                                            <CInputGroup className="mb-4">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-lock-locked" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput type="password" placeholder="Şifre" autoComplete="password" name="password" onChange={onChange} />
                                            </CInputGroup>
                                            <CButton type="submit" color="success" block>Üyeliği Tamamla</CButton>
                                        </CForm>
                                    </CCardBody>
                                    <CCardFooter className="p-4">
                                        <CRow>
                                            <CCol xs="12" sm="6">
                                                <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                                            </CCol>
                                            <CCol xs="12" sm="6">
                                                <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                                            </CCol>
                                        </CRow>
                                    </CCardFooter>
                                </CCard>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
            }
        </>

    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { RegisterUser })(Register);