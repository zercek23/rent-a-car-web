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
import { getVehicleBrand, updateVehicleBrand } from '../../store/actions/vehicleBrandActions';
import { getVehicleCategories } from 'src/store/actions/vehicleCategoryActions';

const EditVehicleBrand = (props) => {

    const [vehicleBrand, setVehicleBrand] = useState({});
    // const user2 = usersData.find( user => user.id.toString() === match.params.id)
    const userDetails = vehicleBrand ? Object.entries(vehicleBrand) :
        [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    useEffect(() => {
        props.getVehicleCategories();
        props.getVehicleBrand(props.match.params.id);
    }, [])

    useEffect(() => {
        if (props.vehicleBrand.vehicleBrand) {
            setVehicleBrand(props.vehicleBrand.vehicleBrand);
        }
    }, [props.vehicleBrand.vehicleBrand])

    const onChange = (e) => {
        setVehicleBrand({...vehicleBrand ,[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.updateVehicleBrand(vehicleBrand);
        props.history.push("/vehicleBrands");
    }

    const resetForm = () => {
        setVehicleBrand({});
    }

    useEffect(() => {
        console.log('vehicleBrand',vehicleBrand)
    }, [vehicleBrand])

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                        Araç Markası Düzenle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Araç Markası</CLabel>
                                        <CInput type="text" name="name" placeholder="Marka" required value={vehicleBrand.name} onChange={onChange} />
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
});

export default connect(mapStateToProps, { getVehicleBrand, updateVehicleBrand, getVehicleCategories })(EditVehicleBrand);
