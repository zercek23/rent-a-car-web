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
import { getFuelTypes, deleteFuelType } from '../../store/actions/fuelTypeActions';

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
    label: 'Benzin Tipi'
  },
  {
    key: 'options',
    label: 'İşlem'
  },
]

const FuelTypes = (props) => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/fuelTypes?page=${newPage}`)
  }

  useEffect(() => {
    props.getFuelTypes();

    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  useEffect(() => {
    if (props.fuelType.fuelTypes) {
    }

  }, [props.fuelType.fuelTypes])

  const deleteById = (id) => {
    props.deleteFuelType(id);
  }

  return (
    <div>
      <CRow>
        <CCol col="3" sm="3" md="3" xl="3" className="mb-3 mb-xl-0">
          <CButton block color="primary" to="add-fuelType">Benzin Tipi Ekle</CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Benzin Tipleri
        </CCardHeader>
            <CCardBody>
              <CDataTable
                items={props.fuelType.fuelTypes}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                // onRowClick={(item) => history.push(`/edit-fuelType/${item.id}`)}
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
                            <CButton block color="warning" to={`/edit-gearType/${item.id}`}>Düzenle</CButton>
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
  fuelType: state.fuelType
});

export default connect(mapStateToProps, { getFuelTypes, deleteFuelType })(FuelTypes);