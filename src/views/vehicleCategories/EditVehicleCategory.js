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
import { getVehicleCategory, updateVehicleCategory } from '../../store/actions/vehicleCategoryActions';

const EditVehicleCategory = (props) => {

    const [vehicleCategory, setVehicleCategory] = useState({});
    // const user2 = usersData.find( user => user.id.toString() === match.params.id)
    const userDetails = vehicleCategory ? Object.entries(vehicleCategory) :
        [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    useEffect(() => {
        props.getVehicleCategory(props.match.params.id);
    }, [])

    useEffect(() => {
        if (props.vehicleCategory.vehicleCategory) {
            setVehicleCategory(props.vehicleCategory.vehicleCategory);
        }
    }, [props.vehicleCategory.vehicleCategory])

    const onChange = (e) => {
        setVehicleCategory({...vehicleCategory ,[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.updateVehicleCategory(vehicleCategory);
        props.history.push("/vehicleCategories");
    }

    const resetForm = () => {
        setVehicleCategory({});
    }

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                        Araç Kategorisi Düzenle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Kategori İsmi</CLabel>
                                        <CInput type="text" name="name" placeholder="Tip" required value={vehicleCategory.name} onChange={onChange} />
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
    vehicleCategory: state.vehicleCategory
});

export default connect(mapStateToProps, { getVehicleCategory, updateVehicleCategory })(EditVehicleCategory);
