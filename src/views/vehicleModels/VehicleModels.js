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
import { getVehicleModels, deleteVehicleModel } from '../../store/actions/vehicleModelActions';
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
    key: 'name',
    label: 'Araç Model'
  },
  {
    key: 'vehiclebrand',
    label: 'Araç Markası - Kategorisi'
  },
  {
    key: 'options',
    label: 'İşlem'
  },
]

const VehicleModels = (props) => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [items, setItems] = useState([])

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/vehicleModels?page=${newPage}`)
  }

  useEffect(() => {
    props.getVehicleModels();

    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  useEffect(() => {
    if (props.vehicleModel.vehicleModels) {
      props.vehicleModel.vehicleModels.map(vehicleModel => {
        vehicleModel.vehiclebrand = `${vehicleModel.vehicleBrand.name} - ${vehicleModel.vehicleBrand.vehicleCategory.name}`;
      });
      setItems(props.vehicleModel.vehicleModels);
    }

  }, [props.vehicleModel.vehicleModels])

  const deleteById = (id) => {
    props.deleteVehicleModel(id);
  }

  return (
    <div>
      <CRow>
        <CCol col="3" sm="3" md="3" xl="3" className="mb-3 mb-xl-0">
          <CButton block color="primary" to="add-vehicleModel">Araç Modeli Ekle</CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Araç Modelleri
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
                            <CButton block color="warning" to={`/edit-vehicleModel/${item.id}`}>Düzenle</CButton>
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
  vehicleModel: state.vehicleModel,
  vehicleBrand: state.vehicleBrand
});

export default connect(mapStateToProps, { getVehicleModels, deleteVehicleModel, getVehicleBrand })(VehicleModels);