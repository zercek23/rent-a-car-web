import React, { useState, useEffect } from 'react'
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
import { getEmployee, updateEmployee } from '../../store/actions/employeeActions';

const EditUser = (props) => {

    const [employee, setEmployee] = useState({});
    // const user2 = usersData.find( user => user.id.toString() === match.params.id)
    const userDetails = employee ? Object.entries(employee) :
        [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    useEffect(() => {
        props.getEmployee(props.match.params.id);
    }, [])

    useEffect(() => {
        if (props.employee.employee) {
            setEmployee(props.employee.employee);
        }
    }, [props.employee.employee])

    const onChange = (e) => {
        setEmployee({...employee ,[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(employee);
        props.updateEmployee(employee);
        props.history.push("/users");
    }

    const resetForm = () => {
        setEmployee({});
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
                                        <CInput type="text" name="firstName" placeholder="Ad" required value={employee.firstName} onChange={onChange} />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Soyad</CLabel>
                                        <CInput type="text" name="lastName" placeholder="Soyad" required value={employee.lastName} onChange={onChange} />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">E-posta</CLabel>
                                        <CInput type="text" name="email" placeholder="E-posta" required value={employee.email} onChange={onChange} />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Kaydet</CButton>
                            <CButton type="reset" size="sm" color="danger" onClick={resetForm}><CIcon name="cil-ban" /> Resetle</CButton>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CForm>

    )
}

const mapStateToProps = (state) => ({
    employee: state.employee
});

export default connect(mapStateToProps, { getEmployee, updateEmployee })(EditUser);
