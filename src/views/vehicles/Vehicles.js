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
import { getVehicles, deleteVehicle } from '../../store/actions/vehicleActions';
import { getVehicleBrand } from '../../store/actions/vehicleBrandActions';

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
    key: 'fueltypename',
    label: 'Benzin Tipi'
  },
  {
    key: 'geartypename',
    label: 'Vites Tipi'
  },
  {
    key: 'vehiclemodelname',
    label: 'Araç Modeli'
  },
  {
    key: 'vehiclebrandname',
    label: 'Araç Markası'
  },
  {
    key: 'vehiclecategoryname',
    label: 'Araç Kategorisi'
  },
  {
    key: 'colorname',
    label: 'Renk'
  },
  {
    key: 'options',
    label: 'İşlem'
  },
]

const Vehicles = (props) => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [items, setItems] = useState([])

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/vehicles?page=${newPage}`)
  }

  useEffect(() => {

    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  useEffect(() => {
    props.getVehicles();
  }, [])
  
  useEffect(() => {
    
    if (props.vehicle.vehicles) {
      console.log('geldi')
      props.vehicle.vehicles.map(vehicle => {
        vehicle.colorname = vehicle.color.name;
        vehicle.fueltypename = vehicle.fuelType.name;
        vehicle.geartypename = vehicle.gearType.name;
        vehicle.vehiclemodelname = vehicle.vehicleModel.name;
        vehicle.vehiclebrandname = vehicle.vehicleModel.vehicleBrand.name;
        vehicle.vehiclecategoryname = vehicle.vehicleModel.vehicleBrand.vehicleCategory.name;

      });
      setItems(props.vehicle.vehicles)
    }

  }, [props.vehicle.vehicles])

  const deleteById = (id) => {
    props.deleteVehicle(id);
  }

  return (
    <div>
      <CRow>
        <CCol col="3" sm="3" md="3" xl="3" className="mb-3 mb-xl-0">
          <CButton block color="primary" to="add-vehicle">Araç Ekle</CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Araçlar
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
                            <CButton block color="warning" to={`/edit-vehicle/${item.id}`}>Düzenle</CButton>
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
  vehicle: state.vehicle,
  vehicleBrand: state.vehicleBrand
});

export default connect(mapStateToProps, { getVehicles, deleteVehicle, getVehicleBrand })(Vehicles);