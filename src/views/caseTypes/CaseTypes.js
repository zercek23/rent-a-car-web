import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CPagination,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from '@coreui/react'

import { connect } from 'react-redux';
import { getCaseTypes, deleteCaseType } from '../../store/actions/caseTypeActions';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = [
  {
    key: 'name',
    label: 'Kasa Tipi'
  },
  {
    key: 'options',
    label: 'İşlem'
  },
]

const CaseTypes = (props) => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/caseTypes?page=${newPage}`)
  }

  useEffect(() => {
    props.getCaseTypes();

    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  useEffect(() => {
    if (props.caseType.caseTypes) {
    }

  }, [props.caseType.caseTypes])

  const deleteById = (id) => {
    props.deleteCaseType(id);
  }

  return (
    <div>
      <CRow>
        <CCol col="3" sm="3" md="3" xl="3" className="mb-3 mb-xl-0">
          <CButton block color="primary" to="add-caseType">Kasa Tipi Ekle</CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Kasa Tipleri
        </CCardHeader>
            <CCardBody>
              <CDataTable
                items={props.caseType.caseTypes}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                // onRowClick={(item) => history.push(`/edit-caseType/${item.id}`)}
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'options':
                    (item) => (
                      <td>
                        <CDropdown className="m-1 btn-group">
                          <CDropdownToggle color="secondary">
                            Seçenekler
                          </CDropdownToggle>
                          <CDropdownMenu>
                            <CButton block color="warning" to={`/edit-caseType/${item.id}`}>Düzenle</CButton>
                            <CButton block color="danger" onClick={() => deleteById(item.id)}>Sil</CButton>
                          </CDropdownMenu>
                        </CDropdown>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )

}

const mapStateToProps = (state) => ({
  caseType: state.caseType
});

export default connect(mapStateToProps, { getCaseTypes, deleteCaseType })(CaseTypes);