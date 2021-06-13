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
import { getCaseType, updateCaseType } from '../../store/actions/caseTypeActions';

const EditCaseType = (props) => {

    const [caseType, setCaseType] = useState({});
    // const user2 = usersData.find( user => user.id.toString() === match.params.id)
    const userDetails = caseType ? Object.entries(caseType) :
        [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    useEffect(() => {
        props.getCaseType(props.match.params.id);
    }, [])

    useEffect(() => {
        if (props.caseType.caseType) {
            setCaseType(props.caseType.caseType);
        }
    }, [props.caseType.caseType])

    const onChange = (e) => {
        setCaseType({...caseType ,[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.updateCaseType(caseType);
        props.history.push("/caseTypes");
    }

    const resetForm = () => {
        setCaseType({});
    }

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                        Kasa Tipi Düzenle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Tip</CLabel>
                                        <CInput type="text" name="name" placeholder="Tip" required value={caseType.name} onChange={onChange} />
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
    caseType: state.caseType
});

export default connect(mapStateToProps, { getCaseType, updateCaseType })(EditCaseType);
