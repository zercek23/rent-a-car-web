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
import { getGearType, updateGearType } from '../../store/actions/gearTypeActions';

const EditGearType = (props) => {

    const [gearType, setGearType] = useState({});
    // const user2 = usersData.find( user => user.id.toString() === match.params.id)
    const userDetails = gearType ? Object.entries(gearType) :
        [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    useEffect(() => {
        props.getGearType(props.match.params.id);
    }, [])

    useEffect(() => {
        if (props.gearType.gearType) {
            setGearType(props.gearType.gearType);
        }
    }, [props.gearType.gearType])

    const onChange = (e) => {
        setGearType({...gearType ,[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.updateGearType(gearType);
        props.history.push("/gearTypes");
    }

    const resetForm = () => {
        setGearType({});
    }

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                        Vites Tipi Düzenle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Tip</CLabel>
                                        <CInput type="text" name="name" placeholder="Tipi" required value={gearType.name} onChange={onChange} />
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
    gearType: state.gearType
});

export default connect(mapStateToProps, { getGearType, updateGearType })(EditGearType);
