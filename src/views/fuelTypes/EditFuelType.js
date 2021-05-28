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
import { getFuelType, updateFuelType } from '../../store/actions/fuelTypeActions';

const EditFuelType = (props) => {

    const [fuelType, setFuelType] = useState({});
    // const user2 = usersData.find( user => user.id.toString() === match.params.id)
    const userDetails = fuelType ? Object.entries(fuelType) :
        [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    useEffect(() => {
        props.getFuelType(props.match.params.id);
    }, [])

    useEffect(() => {
        if (props.fuelType.fuelType) {
            setFuelType(props.fuelType.fuelType);
        }
    }, [props.fuelType.fuelType])

    const onChange = (e) => {
        setFuelType({...fuelType ,[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.updateFuelType(fuelType.id, fuelType);
    }

    const resetForm = () => {
        setFuelType({});
    }

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                        Benzin Tipi Düzenle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Tip</CLabel>
                                        <CInput type="text" name="name" placeholder="Tip" required value={fuelType.firstName} onChange={onChange} />
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
    fuelType: state.fuelType
});

export default connect(mapStateToProps, { getFuelType, updateFuelType })(EditFuelType);
