// @generated by protobuf-ts 2.9.1 with parameter long_type_string,client_none,generate_dependencies
// @generated from protobuf file "results/entities/v1/cacheentry.proto" (package "github.actions.results.entities.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../../google/protobuf/timestamp";
/**
 * @generated from protobuf message github.actions.results.entities.v1.CacheEntry
 */
export interface CacheEntry {
    /**
     * An explicit key for a cache entry
     *
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * SHA256 hex digest of the cache archive
     *
     * @generated from protobuf field: string hash = 2;
     */
    hash: string;
    /**
     * Cache entry size in bytes
     *
     * @generated from protobuf field: int64 size_bytes = 3;
     */
    sizeBytes: string;
    /**
     * Access scope
     *
     * @generated from protobuf field: string scope = 4;
     */
    scope: string;
    /**
     * Version SHA256 hex digest
     *
     * @generated from protobuf field: string version = 5;
     */
    version: string;
    /**
     * When the cache entry was created
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * When the cache entry was last accessed
     *
     * @generated from protobuf field: google.protobuf.Timestamp last_accessed_at = 7;
     */
    lastAccessedAt?: Timestamp;
    /**
     * When the cache entry is set to expire
     *
     * @generated from protobuf field: google.protobuf.Timestamp expires_at = 8;
     */
    expiresAt?: Timestamp;
}
// @generated message type with reflection information, may provide speed optimized methods
class CacheEntry$Type extends MessageType<CacheEntry> {
    constructor() {
        super("github.actions.results.entities.v1.CacheEntry", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "size_bytes", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "scope", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "created_at", kind: "message", T: () => Timestamp },
            { no: 7, name: "last_accessed_at", kind: "message", T: () => Timestamp },
            { no: 8, name: "expires_at", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<CacheEntry>): CacheEntry {
        const message = { key: "", hash: "", sizeBytes: "0", scope: "", version: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CacheEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CacheEntry): CacheEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
                    message.key = reader.string();
                    break;
                case /* string hash */ 2:
                    message.hash = reader.string();
                    break;
                case /* int64 size_bytes */ 3:
                    message.sizeBytes = reader.int64().toString();
                    break;
                case /* string scope */ 4:
                    message.scope = reader.string();
                    break;
                case /* string version */ 5:
                    message.version = reader.string();
                    break;
                case /* google.protobuf.Timestamp created_at */ 6:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* google.protobuf.Timestamp last_accessed_at */ 7:
                    message.lastAccessedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.lastAccessedAt);
                    break;
                case /* google.protobuf.Timestamp expires_at */ 8:
                    message.expiresAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.expiresAt);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CacheEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string key = 1; */
        if (message.key !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.key);
        /* string hash = 2; */
        if (message.hash !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.hash);
        /* int64 size_bytes = 3; */
        if (message.sizeBytes !== "0")
            writer.tag(3, WireType.Varint).int64(message.sizeBytes);
        /* string scope = 4; */
        if (message.scope !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.scope);
        /* string version = 5; */
        if (message.version !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.version);
        /* google.protobuf.Timestamp created_at = 6; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp last_accessed_at = 7; */
        if (message.lastAccessedAt)
            Timestamp.internalBinaryWrite(message.lastAccessedAt, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp expires_at = 8; */
        if (message.expiresAt)
            Timestamp.internalBinaryWrite(message.expiresAt, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.entities.v1.CacheEntry
 */
export const CacheEntry = new CacheEntry$Type();
