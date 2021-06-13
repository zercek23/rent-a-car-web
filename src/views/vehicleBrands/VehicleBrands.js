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
import { getVehicleBrands, deleteVehicleBrand } from '../../store/actions/vehicleBrandActions';
import { getVehicleCategory } from '../../store/actions/vehicleCategoryActions';

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
    label: 'Araç Marka'
  },
  {
    key: 'vehiclecategory',
    label: 'Araç Kategorisi'
  },
  {
    key: 'options',
    label: 'İşlem'
  },
]

const VehicleBrands = (props) => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [items, setItems] = useState([])

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/vehicleBrands?page=${newPage}`)
  }

  useEffect(() => {
    props.getVehicleBrands();

    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  useEffect(() => {
    if (props.vehicleBrand.vehicleBrands) {
      props.vehicleBrand.vehicleBrands.map(vehicleBrand => {
        vehicleBrand.vehiclecategory = vehicleBrand.vehicleCategory.name;
      })
      setItems(props.vehicleBrand.vehicleBrands)
    }

  }, [props.vehicleBrand.vehicleBrands])

  const deleteById = (id) => {
    props.deleteVehicleBrand(id);
  }

  return (
    <div>
      <CRow>
        <CCol col="3" sm="3" md="3" xl="3" className="mb-3 mb-xl-0">
          <CButton block color="primary" to="add-vehicleBrand">Araç Markası Ekle</CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Araç Markaları
        </CCardHeader>
            <CCardBody>
              <CDataTable
                items={items}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
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
                            <CButton block color="warning" to={`/edit-vehicleBrand/${item.id}`}>Düzenle</CButton>
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
  vehicleBrand: state.vehicleBrand,
  vehicleCategory: state.vehicleCategory
});

export default connect(mapStateToProps, { getVehicleBrands, deleteVehicleBrand, getVehicleCategory })(VehicleBrands);