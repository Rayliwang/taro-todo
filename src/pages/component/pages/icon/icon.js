import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './icon.scss'
export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'Icon'
  }
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className="container">
        <Head title="icon" />
        <View className="page-body">
          <View className="page-section">
            <View className="page-section-spacing">
              <View className='page__con__list'>
                <Icon size='60' type='success' />
                <view className="icon_right">
                  <view className="icon_right_head">成功</view>
                  <view className="icon_right_tit">用于表示操作顺利完成</view>
                </view>
              </View>
              <View className='page__con__list'>
                <Icon size='60' type='info' />
                <view className="icon_right">
                  <view className="icon_right_head">提示</view>
                  <view className="icon_right_tit">用于表示信息展示；也常用于缺乏条件的操作拦截，提示用户所需信息</view>
                </view>
              </View>
              <View className='page__con__list'>
                <Icon size='60' type='warn' color='#ccc' />
                <view className="icon_right">
                  <view className="icon_right_head">普通警告</view>
                  <view className="icon_right_tit">用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果</view>
                </view>
              </View>
              <View className='page__con__list'>
                <Icon size='60' type='warn' />
                <view className="icon_right">
                  <view className="icon_right_head">强烈警告</view>
                  <view className="icon_right_tit">用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况</view>
                </view>
              </View>
              <View className='page__con__list'>
                <Icon size='60' type='waiting' />
                <view className="icon_right">
                  <view className="icon_right_head">等待</view>
                  <view className="icon_right_tit">用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况</view>
                </view>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='success_no_circle' />
                <view className="icon_right">
                  <view className="icon_right_head">多选控件图标_已选择</view>
                  <view className="icon_right_tit">用于多选控件中，表示已选择该项目</view>
                </view>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='warn' />
                <view className="icon_right">
                  <view className="icon_right_head">错误提示</view>
                  <view className="icon_right_tit">用于在表单中表示出现错误</view>
                </view>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='success' />
                <view className="icon_right">
                  <view className="icon_right_head">单选控件图标_已选择</view>
                  <view className="icon_right_tit">用于单选控件中，表示已选择该项目</view>
                </view>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='download' />
                <view className="icon_right">
                  <view className="icon_right_head">下载</view>
                  <view className="icon_right_tit">用于表示可下载</view>
                </view>
              </View>
              {/*<View className='page__con__list'>*/}
                {/*<Icon size='20' type='warn' color='#fff' />*/}
                {/*<view className="icon_right">*/}
                  {/*<view className="icon_right_head">提示</view>*/}
                  {/*<view className="icon_right_tit">用于表示在表单中表示有信息提示</view>*/}
                {/*</view>*/}
              {/*</View>*/}
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='clear' color='red' />
                <view className="icon_right">
                  <view className="icon_right_head">停止或关闭</view>
                  <view className="icon_right_tit">用于在表单中，表示关闭或停止</view>
                </view>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='search' />
                <view className="icon_right">
                  <view className="icon_right_head">搜索</view>
                  <view className="icon_right_tit">用于搜索控件中，表示可搜索</view>
                </view>
              </View>
            </View>
          </View>
        </View>
        <Foot />
      </View>
    )
  }
}
