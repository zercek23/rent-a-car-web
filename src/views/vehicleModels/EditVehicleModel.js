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
import { getVehicleModel, updateVehicleModel } from '../../store/actions/vehicleModelActions';
import { getVehicleBrands } from 'src/store/actions/vehicleBrandActions';

const EditVehicleModel = (props) => {

    const [vehicleModel, setVehicleModel] = useState({});
    // const user2 = usersData.find( user => user.id.toString() === match.params.id)
    const userDetails = vehicleModel ? Object.entries(vehicleModel) :
        [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    useEffect(() => {
        props.getVehicleBrands();
        props.getVehicleModel(props.match.params.id);
    }, [])

    useEffect(() => {
        if (props.vehicleModel.vehicleModel) {
            setVehicleModel(props.vehicleModel.vehicleModel);
        }
    }, [props.vehicleModel.vehicleModel])

    const onChange = (e) => {
        setVehicleModel({...vehicleModel ,[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.updateVehicleModel(vehicleModel);
    }

    const resetForm = () => {
        setVehicleModel({});
    }

    useEffect(() => {
        console.log('vehicleModel',vehicleModel)
    }, [vehicleModel])

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                        Araç Modeli Düzenle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Model İsmi</CLabel>
                                        <CInput type="text" name="name" placeholder="Model" required value={vehicleModel.name} onChange={onChange} />
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="select">Araç Modeli</CLabel>
                                        <CSelect custom name="vehicleBrandID" id="select" value={vehicleModel.vehicleBrandID} onChange={onChange}>
                                            {props.vehicleBrand.vehicleBrands.map(vehicleBrand => {
                                                return (
                                                    <option key={vehicleBrand.id} value={vehicleBrand.id}>{vehicleBrand.name}</option>
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
});

export default connect(mapStateToProps, { getVehicleModel, updateVehicleModel, getVehicleBrands })(EditVehicleModel);
