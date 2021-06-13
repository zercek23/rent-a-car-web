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
import { addVehicleModel } from 'src/store/actions/vehicleModelActions';
import { getVehicleBrands } from 'src/store/actions/vehicleBrandActions';
import { Redirect } from "react-router-dom";

const AddVehicleModel = (props) => {

    const [vehicleModel, setVehicleModel] = useState({});

    const onChange = (e) => {
        setVehicleModel({ ...vehicleModel, [e.target.name]: e.target.value });
        console.log(vehicleModel)
    }

    const resetForm = (e) => {
        setVehicleModel({});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addVehicleModel(vehicleModel);
        props.history.push("/vehicleModels");
    }

    useEffect(() => {
        if (props.vehicleBrand.vehicleBrands && props.vehicleBrand.vehicleBrands.length > 0) {
            setVehicleModel({name: '', vehicleModelID: props.vehicleBrand.vehicleBrands[0].id});
        }
    }, [props.vehicleModel.vehicleModels])

    useEffect(() => {
        props.getVehicleBrands();
    }, [])

    useEffect(() => {
        console.log('vehicleModel',vehicleModel)
    }, [vehicleModel])

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Araç Modeli Ekle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Model İsmi</CLabel>
                                        <CInput type="text" placeholder="Model İsmi" required name="name" onChange={onChange} />
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="select">Araç Model ve Kategorisi</CLabel>
                                        <CSelect custom name="vehicleBrandID" id="select" onChange={onChange}>
                                            {props.vehicleBrand.vehicleBrands.map(vehicleBrand => {
                                                return (
                                                    <option key={vehicleBrand.id} value={vehicleBrand.id}>{vehicleBrand.name} - {vehicleBrand.vehicleCategory.name}</option>
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
    vehicleModel: state.vehicleModel,
    vehicleBrand: state.vehicleBrand,
    auth: state.auth
});

export default connect(mapStateToProps, { addVehicleModel, getVehicleBrands })(AddVehicleModel);

