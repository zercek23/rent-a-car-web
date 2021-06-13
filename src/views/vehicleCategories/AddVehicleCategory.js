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
import { addVehicleCategory } from 'src/store/actions/vehicleCategoryActions';
import { Redirect } from "react-router-dom";

const AddVehicleCategory = (props) => {

    const [vehicleCategory, setVehicleCategory] = useState({});

    const onChange = (e) => {
        setVehicleCategory({ ...vehicleCategory, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addVehicleCategory(vehicleCategory);
        props.history.push("/vehicleCategories");
    }

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Araç Kategorisi Ekle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Kategori İsmi</CLabel>
                                        <CInput type="text" placeholder="Kategori İsmi" required name="name" onChange={onChange} />
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
    vehicleCategory: state.vehicleCategory,
    auth: state.auth
});

export default connect(mapStateToProps, { addVehicleCategory })(AddVehicleCategory);

