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
import { getVehicleCategories, deleteVehicleCategory } from '../../store/actions/vehicleCategoryActions';

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
    label: 'Araç Kategorisi'
  },
  {
    key: 'options',
    label: 'İşlem'
  },
]

const VehicleCategories = (props) => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/vehicleCategories?page=${newPage}`)
  }

  useEffect(() => {
    props.getVehicleCategories();

    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  useEffect(() => {
    if (props.vehicleCategory.vehicleCategories) {
    }

  }, [props.vehicleCategory.vehicleCategories])

  const deleteById = (id) => {
    props.deleteVehicleCategory(id);
  }

  return (
    <div>
      <CRow>
        <CCol col="3" sm="3" md="3" xl="3" className="mb-3 mb-xl-0">
          <CButton block color="primary" to="add-vehicleCategory">Araç Kategorisi Ekle</CButton>
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
                items={props.vehicleCategory.vehicleCategories}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                // onRowClick={(item) => history.push(`/edit-vehicleCategory/${item.id}`)}
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
                            <CButton block color="warning" to={`/edit-vehicleCategory/${item.id}`}>Düzenle</CButton>
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
  vehicleCategory: state.vehicleCategory
});

export default connect(mapStateToProps, { getVehicleCategories, deleteVehicleCategory })(VehicleCategories);