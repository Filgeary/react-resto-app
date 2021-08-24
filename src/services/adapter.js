export const adaptOrderDataToServer = data => {
  const newOrder = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      totalAmount: item.totalAmount,
      date: new Date(Date.now()).toLocaleString('en-GB'),
    }
  })
  return newOrder
}

export const adaptOrderDataToClient = data => {
  return Object.entries(data)
    .filter(item => item[0] !== 'id')
    .map(item => item[1])
}
