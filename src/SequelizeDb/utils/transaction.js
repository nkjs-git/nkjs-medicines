const hasCommitted = async (transaction, callback) => {
  if (!transaction) {
    return
  }
  await transaction.commit()
  return transaction.afterCommit(callback)
}

module.exports = { hasCommitted }
