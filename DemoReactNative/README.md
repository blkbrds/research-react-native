# Component life circle

## Vòng đời của một component
- Vòng đời của 1 component là gì?
- Những hàm liên quan đến vòng đời của component
## Vòng đời của một component từ lúc được khởi tạo đến lúc được giải phóng;

1. contructor: Hàm khởi tạo của component
2. Mounting
- componentWillMount(): được gọi sau hàm dựng, trước khi render một component
- render(): return về các component con của nó, ví dụ một view, một text....
- componentDidMount() : được gọi sau khi hàm render kết thúc.
3. UpDating
- componentWillReceiveProps(): Gọi khi props thay đổi giữ liệu hay nhận một giữ liệu mới.trong ví dụ là khi component cha được render lại sau khi gọi hàm setState().
- shouldComponentUpdate(): Return false nếu ko muốn update
- componentWillUpdate(): trước khi component update.
- componentDidUpdate(): sau khi component update.
4. Unmounting
- componentWillUnmount(): gọi khi một component bị giải phóng. (ex: bị remove ra khỏi component cha)

## Examples
[Documentation](https://github.com/blkbrds/research-react-native/tree/feature/React-native-lifeCircle-demo/DemoReactNative)

# ImageView
## Hiển thị Image trong react native
- Load ảnh từ local/ bunle
- Độ phân giải ảnh (1x,2x,3x)
- Cách resize model (conver, contain, stretch, center(iOS only))
- Bo góc hình = > tròn
- TintColor: dùng 1 ảnh để hiển thị nhiều màu khác nhau
- Load hình từ URL
