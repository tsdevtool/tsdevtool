// Modules - boc tách thành phần xử lý nhiệm vụ cụ thể sang nơi riêng
// Import / Export
// 1 module chi export default 1 cai
import logger, { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from "./logger.js";
import logger2 from "./logger2/index.js";

console.log(logger);
logger("Test message...", "error");

logger("Test message...", TYPE_LOG);
logger("Test message...", TYPE_WARN);
logger("Test message...", TYPE_ERROR);

logger2("Test logger 2...", TYPE_LOG);
