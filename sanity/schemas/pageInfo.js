export default {
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot:true
      }
    },
    {
      name: 'backGroundInformation',
      title: 'BackGround Information',
      type: 'text'
    },
    {
      name: 'backgroundImage',
      title: 'BackGround Image',
      type: 'image',
      options: {
        hotspot:true
      }
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    }
  ]
}
