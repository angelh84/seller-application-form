import Airtable from 'airtable'

// Key would be in a env file somewhere, hardcoded for demo purposes
const airtable = new Airtable({apiKey: 'keyW52kOyMMrEBN4l'}).base('appuT5k5suJ8mOVFH');

const httpClient = {
  createResource(data) {
    return airtable(data.table).create([
      {
        "fields": data.fields
      }
    ])
  },

  readResource(data) {
    return airtable(data.table).select({
      maxRecords: 1,
      filterByFormula: `={${data.column}} = '${data.value}'`
    }).all()
  },

  updateResource(data) {
    return airtable(data.table).update([
      {
        "fields": data.fields
      }
    ])
  },

  deleteResource(data) {
    return airtable(data.table).destroy([data.id])
  }
}

export { httpClient }