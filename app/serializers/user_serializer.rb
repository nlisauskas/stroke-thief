class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :hometown, :handicap
end
