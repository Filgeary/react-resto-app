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
