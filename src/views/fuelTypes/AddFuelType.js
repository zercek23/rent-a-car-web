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
import { connect } from 'react-redux';
import { addFuelType } from 'src/store/actions/fuelTypeActions';
import { Redirect } from "react-router-dom";

const AddFuelType = (props) => {

    const [fuelType, setFuelType] = useState({});

    const onChange = (e) => {
        setFuelType({ ...fuelType, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addFuelType(fuelType);
        props.history.push("/fuelTypes");
    }

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Benzin Tipi Ekle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Tip</CLabel>
                                        <CInput type="text" placeholder="Tip" required name="name" onChange={onChange} />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Kaydet</CButton>
                            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Resetle</CButton>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CForm>

    )
}

const mapStateToProps = (state) => ({
    fuelType: state.fuelType,
    auth: state.auth
});

export default connect(mapStateToProps, { addFuelType })(AddFuelType);

