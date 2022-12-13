import Error from './Error'
import Notification from './Notification'
import PropTypes from 'prop-types'

function PersonForm({
  handleForm,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
  success,
  error,
}) {
  return (
    <div className='md:col-start-1 md:col-end-3 md:self-stretch w-full'>
      <form
        className='bg-white px-8 pt-6 rounded-lg border border-gray-200 h-full w-full'
        onSubmit={handleForm}
      >
        <Error error={error} />
        <Notification success={success} />
        <div className='mb-4'>
          <label className='block font-medium text-gray-500 uppercase text-xs mb-2'>Name: </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block font-medium text-gray-500 uppercase text-xs mb-2'>Number: </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div className='text-center m-8'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 md:px-4 lg:px-8 rounded-lg focus:outline-none  	'
            type='submit'
          >
            Add Phone
          </button>
        </div>
      </form>
    </div>
  )
}

PersonForm.propTypes = {
  handleForm: PropTypes.func,
  newName: PropTypes.string,
  handleNameChange: PropTypes.func,
  newNumber: PropTypes.string,
  handleNumberChange: PropTypes.func,
  success: PropTypes.string,
  error: PropTypes.string,
}

export default PersonForm
