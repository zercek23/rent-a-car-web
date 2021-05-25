import React, { useState, useEffect} from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/authActions'

const EditUser = (props) => {

    const [user, setUser] = useState({});
    // const user2 = usersData.find( user => user.id.toString() === match.params.id)
    const userDetails = user ? Object.entries(user) : 
      [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    useEffect(() => {
        props.getUser(props.match.params.id);
        setUser(props.auth.getUser);
        console.log(props.auth.getUser);
    }, [])

    const onChange = (e) => {

    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Kullanıcıyı Düzenle
              <DocsLink name="-Input" />
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Ad</CLabel>
                                        <CInput id="name" type="text" placeholder="Ad" required onChange={onChange} />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Soyad</CLabel>
                                        <CInput id="lastName" type="text" placeholder="Soyad" required onChange={onChange} />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">E-posta</CLabel>
                                        <CInput id="e-mail" type="text" placeholder="E-posta" required onChange={onChange} />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Şifre</CLabel>
                                        <CInput id="password" type="password" placeholder="Şifre" required onChange={onChange} />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CForm>

    )
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getUser })(EditUser);
