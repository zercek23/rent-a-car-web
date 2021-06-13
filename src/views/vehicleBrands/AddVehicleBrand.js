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
import { addVehicleBrand } from 'src/store/actions/vehicleBrandActions';
import { getVehicleCategories } from 'src/store/actions/vehicleCategoryActions';
import { Redirect } from "react-router-dom";

const AddVehicleBrand = (props) => {

    const [vehicleBrand, setVehicleBrand] = useState({});

    const onChange = (e) => {
        setVehicleBrand({ ...vehicleBrand, [e.target.name]: e.target.value });
    }

    const resetForm = (e) => {
        setVehicleBrand({});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addVehicleBrand(vehicleBrand);
        props.history.push("/vehicleBrands");
    }

    useEffect(() => {
        props.getVehicleCategories();
    }, [])

    useEffect(() => {
        if (props.vehicleCategory.vehicleCategories && props.vehicleCategory.vehicleCategories.length > 0) {
            setVehicleBrand({name: '', vehicleCategoryID: props.vehicleCategory.vehicleCategories[0].id});
        }
    }, [props.vehicleCategory.vehicleCategories])

    useEffect(() => {
        console.log('vehicleBrand',vehicleBrand)
    }, [vehicleBrand])

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Araç Marka Ekle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Mark İsmi</CLabel>
                                        <CInput type="text" placeholder="Marka İsmi" required name="name" onChange={onChange} />
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="select">Araç Kategorisi</CLabel>
                                        <CSelect custom name="vehicleCategoryID" id="select" value={vehicleBrand.vehicleCategoryID} onChange={onChange}>
                                            {props.vehicleCategory.vehicleCategories.map(vehicleCategory => {
                                                return (
                                                    <option key={vehicleCategory.id} value={vehicleCategory.id}>{vehicleCategory.name}</option>
                                                )
                                            })}
                                        </CSelect>
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
    vehicleBrand: state.vehicleBrand,
    vehicleCategory: state.vehicleCategory,
    auth: state.auth
});

export default connect(mapStateToProps, { addVehicleBrand, getVehicleCategories })(AddVehicleBrand);

