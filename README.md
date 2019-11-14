## groupuserテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, undex:true|

### Association
- has_many :group_users
- has_many :groups,through::group_users
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|references|foreign_key: true, index: true|
|user_id|references|foreign_key: true, index: true|

### Association
- belongs_to :users
- belongs_to :groups

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :group_users
- has_many :groups,through::group_users
- has_many :messages