// formFields.js
const formFields = [

  {
    id: 'name',
    label: 'Name',
    type: 'text',
  },

  {
    id: 'phone',
    label: 'Phone',
    type: 'tel',
  },


    {
      id: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },

    
    {
      id: 'subject',
      label: 'Subject',
      type: 'textarea',
      required: true,
      rows: 4, 

    },
  ];
  
  export default formFields;
  